import React, { useState } from "react";
import Question from "./Question";
import Story from "./Story";

export default function Quiz({playbook}) {
    let [index, setIndex] = useState(0);
    let [fail, setFail] = useState(0);

    const nextPage = () => { if (index + 1 < playbook.length) setIndex(index + 1) };
    const failed = () => {};

    const storyToComponent = (episode) => {
        if (episode.type === "story") {
            return <Story onNext={nextPage} {...episode}/>
        }

        return <Question onRightAnswer={nextPage} onWrongAnswer={failed} {...episode}/>
    }

    const actualEpisode = playbook.map(storyToComponent)[index];

    return actualEpisode;

}