import React, { useState } from 'react'

const Header = ({title}) => (
    <div>
        <h1>{title}</h1>
    </div>
    )

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({text, value, percent}) => {
    console.log({text, value})
    return(
        <tr>
            <td>{text} {value} {percent}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    console.log({good, neutral, bad, all, average, positive})
    return(
        <table>
            <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} percent="%" />
            </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const clickGood = () => {
        setGood(good + 1)
    }

    const clickNeutral = () => {
        setNeutral(neutral + 1)
    }

    const clickBad = () => {
        setBad(bad + 1)
    }

    const all = good + neutral + bad
    const average = (good + bad) / all
    const positive = (good / all) * 100

    const feedback = "give feedback"
    const statistics = "statistics"

    if (all !== 0)
        return (
            <div>
                <Header title={feedback}/>
                <Button
                    handleClick={() => clickGood(good)}
                    text="good"
                />
                <Button
                    handleClick={() => clickNeutral(neutral)}
                    text="neutral"
                />
                <Button
                    handleClick={() => clickBad(bad)}
                    text="bad"
                />
                <Header title={statistics} />
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    all={all}
                    average={average}
                    positive={positive}
                />
            </div>
        )
    else
        return (
            <div>
                <Header title={feedback}/>
                <Button
                    handleClick={() => clickGood(good)}
                    text="good"
                />
                <Button
                    handleClick={() => clickNeutral(neutral)}
                    text="neutral"
                />
                <Button
                    handleClick={() => clickBad(bad)}
                    text="bad"
                />
                <Header title={statistics} />
                <p>No feedback given</p>
            </div>
        )
}

export default App;