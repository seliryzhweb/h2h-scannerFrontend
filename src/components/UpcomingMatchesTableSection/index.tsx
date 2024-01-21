import React from "react";

const UpcomingMatchesTableSection: React.FC = () => {
    return (
        <section className="section2__in-person-meeting-template">
            <div className="container">
                <h2 className="section2-title__in-person-meeting-template">
                    Upcoming matches
                </h2>
                <div className="section2-container__in-person-meeting-template">
                    <div className="section2-container-top__in-person-meeting-template">
                        <button
                            type="button"
                            data-tab="#table1"
                            className="section2-container-top-block__in-person-meeting-template section2-container-top-block__in-person-meeting-template1 section2-container-top-active__in-person-meeting-template"
                        >
                            Overall
                        </button>
                        <button
                            type="button"
                            data-tab="#table2"
                            className="section2-container-top-block__in-person-meeting-template section2-container-top-block__in-person-meeting-template1"
                        >
                            Home
                        </button>
                        <button
                            type="button"
                            data-tab="#table3"
                            className="section2-container-top-block__in-person-meeting-template section2-container-top-block__in-person-meeting-template1"
                        >
                            Away
                        </button>
                    </div>
                    <div
                        className="table-parent table1 table-active"
                        id="table1"
                    >
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table-title-number">#</th>
                                    <th className="table-title-team">Team</th>
                                    <th className="table-middle">MP</th>
                                    <th className="table-middle">W</th>
                                    <th className="table-middle">D</th>
                                    <th className="table-middle">L</th>
                                    <th className="table-middle">G</th>
                                    <th className="table-middle">GD</th>
                                    <th className="table-middle">PTS</th>
                                    <th className="table-form-td">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">2.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-parent table1" id="table2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table-title-number">#</th>
                                    <th className="table-title-team">Team</th>
                                    <th className="table-middle">MP</th>
                                    <th className="table-middle">W</th>
                                    <th className="table-middle">D</th>
                                    <th className="table-middle">L</th>
                                    <th className="table-middle">G</th>
                                    <th className="table-middle">GD</th>
                                    <th className="table-middle">PTS</th>
                                    <th className="table-form-td">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder1
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">2.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-parent table1" id="table3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table-title-number">#</th>
                                    <th className="table-title-team">Team</th>
                                    <th className="table-middle">MP</th>
                                    <th className="table-middle">W</th>
                                    <th className="table-middle">D</th>
                                    <th className="table-middle">L</th>
                                    <th className="table-middle">G</th>
                                    <th className="table-middle">GD</th>
                                    <th className="table-middle">PTS</th>
                                    <th className="table-form-td">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">2.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-title-number">1.</td>
                                    <td className="table-title-team">
                                        <div className="table-name-team">
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            Marcus Maraunder
                                        </div>
                                    </td>
                                    <td className="table-middle">5</td>
                                    <td className="table-middle">2</td>
                                    <td className="table-middle">4</td>
                                    <td className="table-middle">1</td>
                                    <td className="table-middle">13:2</td>
                                    <td className="table-middle">10</td>
                                    <td className="table-middle">15</td>
                                    <td className="table-form-td">
                                        <div className="table-form">
                                            <div className="table-form-block matches-upcomingMatches-mini-block-ques__index">
                                                ?
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-lose__index">
                                                L
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-d__index">
                                                D
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                            <div className="table-form-block matches-upcomingMatches-mini-block-win__index">
                                                W
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingMatchesTableSection;
