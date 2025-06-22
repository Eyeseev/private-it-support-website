export interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Victor transformed my slow laptop in under an hour. It now boots up in seconds instead of minutes, and I can finally work without constant freezing. His explanation of what was wrong was crystal clear—no tech jargon!",
    name: "Sarah Chen",
    service: "Computer Tune-Up"
  },
  {
    quote: "I was struggling with Wi-Fi dead zones in my apartment for months. Victor diagnosed the issue, optimized my router settings, and now I have perfect coverage everywhere. My home office setup is finally working properly.",
    name: "Michael Rodriguez",
    service: "Wi-Fi & Network Help"
  },
  {
    quote: "After getting suspicious emails, I was worried about my computer's security. Victor not only removed the malware but taught me how to spot phishing attempts. I feel much safer online now.",
    name: "Jennifer Thompson",
    service: "Security & Virus Removal"
  },
  {
    quote: "Setting up my new MacBook was overwhelming until I found Victor. He transferred all my files, set up my accounts, and showed me how to use everything. I'm actually excited to use my computer now!",
    name: "David Kim",
    service: "New Device Setup & Training"
  },
  {
    quote: "When my external drive failed, I thought I'd lost years of family photos. Victor recovered everything and set up automatic backups so it never happens again. I can't thank him enough.",
    name: "Lisa Anderson",
    service: "Data Backup & Recovery"
  }
]; 