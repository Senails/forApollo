import React from "react";
import './block1.css'

export default function Block1():JSX.Element {
    return <section className="block1">
        <div className="content">
            <div className="foranimation"></div>
            <div className="fortext">
                <h1>Lorem Ipsum Sans-Serif</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                <div className="buttons">
                    <a href=""><div className="disc"></div></a>
                    <a href=""><div className="conect"><span>Сотрудничество</span></div></a>
                </div>
            </div>
        </div>
    </section>
}