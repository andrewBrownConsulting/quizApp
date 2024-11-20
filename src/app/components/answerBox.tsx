"use client"

import { useEffect, useState } from "react";

export default function AnswerBox(answers: string[], correct: number, answered: boolean, setAnswered: any, score: any, setScore: any) {
    const blueBox = "bg-[#5F5980] text-white p-5 text-left rounded-lg w-full";
    const greenBox = "bg-[#417F43] text-white p-5 text-left rounded-lg w-full";
    const redBox = "bg-[#892325] text-white p-5 text-left rounded-lg w-full";
    function rightAnswer(e: any) {
        setScore(score + 1);
        if (answered) return;
        e.target.className = greenBox;
        setAnswered(true);
    }
    function flashRed(e: any, speed: number = 500) {
        //flas red and blue boxes 10 times
        setTimeout(() => {
            e.target.className = blueBox;
        }, speed);
        setTimeout(() => {
            e.target.className = redBox;
        }, speed * 2);
        setTimeout(() => {
            e.target.className = blueBox;
        }, speed * 3);
        setTimeout(() => {
            e.target.className = redBox;
        }, speed * 4);
        setTimeout(() => {
            e.target.className = blueBox;
        }, speed * 5);
        setTimeout(() => {
            e.target.className = redBox;
        }, speed * 6);
    }
    function wrongAnswer(e: any) {
        if (answered) return;
        e.target.className = redBox;
        e.target.id = "wrong-answer";
        const speed = 300;
        flashRed(e, speed);
        const rightBox = document.getElementById("right-answer");
        setTimeout(() => { rightBox!.className = greenBox; }, speed * 7);
        setAnswered(true)
    }
    function makeAnswers() {
        return (
            answers.map((answer, key) => {
                return (key == correct ?
                    <button key={key} onClick={(e) => rightAnswer(e)} id="right-answer" className={blueBox}>{answer}</button>
                    : <button key={key} onClick={(e) => wrongAnswer(e)} className={blueBox}>{answer}</button>
                );
            })
        );
    }

    return (<div className="grid grid-cols-1 gap-5 p-10">
        {makeAnswers()}
    </div>);
}