import React from 'react';
import ReactDOM from 'react-dom';
import TimerButton from "./TimerButton";

class Puzzle27255 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $.ajax({
            type: "POST",
            url: "/getOriginLink",
            data: {
                id: 27255
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (msg) {
                document.getElementById("originL").href = msg;
            },
            error: function () {
                alert("Ajax error");
            }
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <table className="table table-sm col-sm-5">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td className="white"><b className="numbers">1</b></td>
                        <td className="black kingW"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white knightW"></td>
                        <td className="black rookW"></td>
                    </tr>
                    <tr>
                        <td className="black pawnW"><b className="numbers">2</b></td>
                        <td className="white pawnW"></td>
                        <td className="black pawnW"></td>
                        <td className="white"></td>
                        <td className="black pawnW"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                    </tr>
                    <tr>
                        <td className="white"><b className="numbers">3</b></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black pawnW"></td>
                        <td className="white"></td>
                        <td className="black bishopW"></td>
                    </tr>
                    <tr>
                        <td className="black"><b className="numbers">4</b></td>
                        <td className="white"></td>
                        <td className="black queenB"></td>
                        <td className="white knightB"></td>
                        <td className="black"></td>
                        <td className="white queenW"></td>
                        <td className="black"></td>
                        <td className="white pawnW"></td>
                    </tr>
                    <tr>
                        <td className="white"><b className="numbers">5</b></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white pawnW"></td>
                        <td className="black"></td>
                    </tr>
                    <tr>
                        <td className="black"><b className="numbers">6</b></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black bishopB"></td>
                        <td className="white"></td>
                    </tr>
                    <tr>
                        <td className="white pawnB"><b className="numbers">7</b></td>
                        <td className="black pawnB"></td>
                        <td className="white pawnB"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black pawnB"></td>
                        <td className="white pawnB"></td>
                        <td className="black pawnB"></td>
                    </tr>
                    <tr>
                        <td className="black">
                            <b className="numbers">8</b>
                            <b className="letters" id="letterA">a</b>
                        </td>
                        <td className="white kingB">
                            <b className="letters">b</b>
                        </td>
                        <td className="black">
                            <b className="letters">c</b>
                        </td>
                        <td className="white">
                            <b className="letters">d</b>
                        </td>
                        <td className="black">
                            <b className="letters">e</b>
                        </td>
                        <td className="white">
                            <b className="letters">f</b>
                        </td>
                        <td className="black">
                            <b className="letters">g</b>
                        </td>
                        <td className="white rookB">
                            <b className="letters">h</b>
                        </td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <a className="text-danger text-decoration-none"
                           href="https://en.wikipedia.org/wiki/Rules_of_chess">
                            The rules of chess
                        </a>
                        <a className="text-danger text-decoration-none col-sm-6" href="#" id="originL">
                            Original puzzle
                        </a>
                    </div>
                    <div className="col-sm-2">
                        <TimerButton/>
                        <a href="http://web-dev-labs.loc/27255histogram">
                            <button id="histogram" className="btn btn-secondary ml-2">Histogram</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Puzzle27255;

if (document.getElementById('puzzle27255')) {
    ReactDOM.render(<Puzzle27255/>, document.getElementById('puzzle27255'));
}
