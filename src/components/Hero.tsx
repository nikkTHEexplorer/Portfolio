import { useEffect, useState } from 'react';
import { Download, Linkedin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

type AnimatedWordsProps = {
  text: string;
  className: string;
  delay?: number;
};

type TypewriterProps = {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
  startDelay?: number;
  cursor?: boolean;
  cursorChar?: string;
  className?: string;
};

function AnimatedWords({ text, className, delay = 0 }: AnimatedWordsProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text} </span>;
  }

  return (
    <span className={className} aria-hidden="true">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.25em] will-change-transform"
          initial={{ opacity: 0, y: '0.6em', filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: '0em', filter: 'blur(0px)' }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + index * 0.08,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function Typewriter({
  words,
  speed = 85,
  delayBetweenWords = 1400,
  startDelay = 0,
  cursor = true,
  cursorChar = '|',
  className = '',
}: TypewriterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(startDelay === 0);

  const currentWord = words[wordIndex] ?? '';

  useEffect(() => {
    if (shouldReduceMotion || startDelay === 0) {
      setHasStarted(true);
      return;
    }

    const startTimeout = window.setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => window.clearTimeout(startTimeout);
  }, [shouldReduceMotion, startDelay]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(words[0] ?? '');
      return;
    }

    if (!hasStarted) {
      return;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          window.setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenWords);
        }
      } else if (charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((previous) => (previous + 1) % words.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentWord, delayBetweenWords, hasStarted, isDeleting, shouldReduceMotion, speed, words, wordIndex]);

  useEffect(() => {
    if (!cursor || shouldReduceMotion) {
      return;
    }

    const cursorInterval = window.setInterval(() => {
      setShowCursor((previous) => !previous);
    }, 500);

    return () => window.clearInterval(cursorInterval);
  }, [cursor, shouldReduceMotion]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span className="ml-1 inline-block transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
          {cursorChar}
        </span>
      )}
    </span>
  );
}

export default function Hero() {
  const firstLine =
    '8 years turning complex market questions into decisions for leadership teams across';
  const secondLine = 'ICT, industrial, and emerging tech.';
  const rotatingExpertise = [
    'Strategy Consulting',
    'Account Management',
    'Team Handling',
    'Market Intelligence',
    'Competitive Research',
  ];
  const headline =
    `${firstLine} ${secondLine}`;
  const wordStagger = 0.08;
  const wordDuration = 0.45;
  const secondLineDelay =
    (firstLine.split(' ').length - 1) * wordStagger + wordDuration;
  const subtitleStartDelay =
    (secondLine.split(' ').length - 1) * wordStagger + wordDuration + secondLineDelay;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}Nikhil_resume_base.docx`;
    link.download = 'Nikhil_resume_base.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="container mx-auto px-6 pt-16 lg:pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center lg:items-start">
      <div className="space-y-8 relative z-10">
        <h1 className="font-bold leading-[1.2] tracking-tight" aria-label={headline}>
          <AnimatedWords
            text={firstLine}
            className="text-4xl md:text-5xl lg:text-6xl text-slate-900"
          />
          <br />
          <AnimatedWords
            text={secondLine}
            className="mt-3 inline-block text-5xl md:text-6xl lg:text-7xl text-emerald-600"
            delay={secondLineDelay}
          />
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed min-h-8">
          <Typewriter
            words={rotatingExpertise}
            startDelay={subtitleStartDelay * 1000}
            className="font-medium text-slate-700"
          />
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={handleDownload}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-colors w-fit"
          >
            Download My Resume
            <span className="bg-white text-emerald-500 rounded-full p-1">
              <Download className="w-4 h-4" />
            </span>
          </button>
          
          <a 
            href="https://linkedin.com/in/nikhilsharma3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-colors w-fit"
          >
            LinkedIn Profile
            <span className="bg-slate-200 text-slate-900 rounded-full p-1">
              <Linkedin className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="pt-12 border-t border-slate-200 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Nikhil Sharma </h2>
          <p className="text-sm font-medium text-emerald-600 max-w-md leading-relaxed">
            MBA + Computer Science engineering
          </p>
        </div>
      </div>

      <div className="relative lg:-mt-8">
        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] flex items-end justify-center scale-110 lg:scale-[1.2] origin-bottom">
          <img 
            src={`${import.meta.env.BASE_URL}Profile.png`} 
            alt="Nikhil Sharma" 
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
