'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
    const [menuState, setMenuState] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        // Detect only once on mount
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) {
                setVideoSrc('https://res.cloudinary.com/dqj6ucyg3/video/upload/v1754831619/IMG_0672_tnegjb.mov'); // mobile
            } else {
                setVideoSrc('https://res.cloudinary.com/dqj6ucyg3/video/upload/v1754807476/Play_pt8kaw.mp4'); // tablet & desktop
            }
        }
    }, []);

    return (
        <>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
                >
                    <div className="m-auto max-w-5xl px-6"></div>
                </nav>
            </header>

            <main>
                <section className="overflow-hidden">
                    <div className="relative mx-auto px-6 py-28 lg:py-20">
                        <div className="lg:flex lg:items-center lg:gap-12">
                            <div className="relative z-10 mx-auto max-w-xl text-center mt-20 pt-10 sm:mt-0 lg:ml-0 lg:w-1/2 lg:text-left">
                                <a
                                    href="/"
                                    className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
                                >
                                    <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                                        Available
                                    </span>
                                    <span className="text-sm">For new opportunities</span>
                                    <span className="bg-(--color-border) block h-4 w-px"></span>
                                    <ArrowRight className="size-4" />
                                </a>

                                <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                                    Full Stack Developer & AI/ML Engineer
                                </h1>
                                <p className="mt-8">
                                    Passionate about creating digital experiences that combine
                                    beautiful design with robust functionality. Specializing in modern
                                    web technologies and user-centered design.
                                </p>

                                <div className="py-8">
                                    <div className="flex items-center gap-2 md:pr-1.5 lg:pr-0">
                                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                                            <a href="mailto:girisaivinayguttula@gmail.com">
                                                <Mail className="h-4 w-4" />
                                                <span className="sr-only">Email</span>
                                            </a>
                                        </Button>

                                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                                            <a
                                                href="https://drive.google.com/file/d/1dqY9vTQ0rkWAKDuas6bOUqjLkCSvWhOW/view?usp=sharing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FileText className="h-4 w-4" />
                                                <span className="sr-only">Document</span>
                                            </a>
                                        </Button>

                                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                                            <a
                                                href="https://www.linkedin.com/in/girisaivinayguttula"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Linkedin className="h-4 w-4" />
                                                <span className="sr-only">LinkedIn</span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
                            <div
                                aria-hidden
                                className="absolute z-[1] inset-0 bg-gradient-to-r from-background from-35% md:from-50% lg:from-35%"
                            />
                            <div className="relative">
                                {videoSrc && (
                                    <video
                                        src={videoSrc}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto object-cover rounded-lg min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] scale-110"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}