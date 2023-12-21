"use client";
import {LandingHeader} from '@/app/components/landing/landing-header/landing-header';
import {LandingHero} from './components/landing/landing-hero/landing-hero';
import {LandingFooter} from "@/app/components/landing/landing-footer/landing-footer";
import {CheckboxContext, CheckboxContextHandler} from "@/app/context/landing-context";
import {useState} from "react";

export default function Home() {
    const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)

    return (
        <>
            <CheckboxContext.Provider value={valueCheckbox}>
                <CheckboxContextHandler.Provider value={setValueCheckbox}>
                    <LandingHeader></LandingHeader>
                    <LandingHero></LandingHero>
                    <LandingFooter></LandingFooter>
                </CheckboxContextHandler.Provider>
            </CheckboxContext.Provider>
        </>
    );
}
