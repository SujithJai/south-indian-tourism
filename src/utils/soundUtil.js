// Ambient Sound Synthesizer using Web Audio API
// Generates a soothing meditative drone + gentle wind chime / flute resonance

class AmbientSoundGenerator {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.intervalId = null;
    this.oscillators = [];
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Base tanpura / warm natural drone (Sa-Pa drone in Indian classical frequency ~ 146.8 Hz D3 & 220 Hz A3)
    const baseFreqs = [146.83, 220.0, 293.66];
    baseFreqs.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      
      // Warm low-pass filter
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push({ osc, gain });
    });

    // Occasional gentle high chime (flute note)
    const melodicNotes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33];
    this.intervalId = setInterval(() => {
      if (!this.isPlaying || !this.audioCtx) return;
      const noteFreq = melodicNotes[Math.floor(Math.random() * melodicNotes.length)];
      this.playGentleChime(noteFreq);
    }, 4500);
  }

  playGentleChime(freq) {
    if (!this.audioCtx || this.audioCtx.state !== 'running') return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      const now = this.audioCtx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.03, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 4.2);
    } catch {
      // Audio fallback
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.oscillators.forEach(({ osc, gain }) => {
      try {
        const now = this.audioCtx.currentTime;
        gain.gain.linearRampToValueAtTime(0, now + 0.5);
        setTimeout(() => osc.stop(), 500);
      } catch {
        // Safe exit
      }
    });
    this.oscillators = [];
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const soundManager = new AmbientSoundGenerator();
