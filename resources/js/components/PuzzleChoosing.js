import React from 'react';
import ReactDOM from 'react-dom';

class PuzzleChoosing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        $.ajax({
            type: "POST",
            url: "/sessionSuccess",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (msg) {
                document.getElementById('success').innerText = msg;
            },
            error: function () {
                alert("Ajax session error");
            }
        });
        $.ajax({
            type: "POST",
            url: "/getPuzzleIds",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (msg) {
                // alert(msg);
                document.getElementById("chessId").innerHTML = msg;
            },
            error: function () {
                alert("Ajax error");
            }
        });
    }

    handleChange(event) {
        var sel = document.getElementById("chessId");
        var id = sel.options[sel.selectedIndex].value;
        $.ajax({
            type: "POST",
            url: "/getPuzzlePhoto",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {id: id},
            success: function (msg) {
                var photo = document.getElementById("photo");
                photo.src = msg;
                // alert(msg);
            },
            error: function () {
                alert("Ajax error");
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var sel = document.getElementById("chessId");
        var id = sel.options[sel.selectedIndex].value;

        $.ajax({
            type: "POST",
            url: "/choose_puzzle_form/request",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                puzzleId: id,
                // name: name,
                // surname: surname,
                // level: level,
            },
            success: function (msg) {
                window.location.replace(msg);
                // alert(msg);
            },
            error: function () {
                alert("Ajax error");
            }
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center text-success" id="success">
                    {/*<ul id="list">*/}
                    {/*@foreach ($errors->all() as $error)*/}
                    {/*<li>{{ $error }}</li>*/}
                    {/*@endforeach*/}
                    {/*</ul>*/}
                </div>
                <div className="row justify-content-center">
                    <form onSubmit={this.handleSubmit} className="form-inline" action="" id="puzzleChoosing">
                        <label className="mt-sm-2" htmlFor="chessId">Choose ID of your game of chess</label>
                        <select className="form-control ml-sm-2 mt-sm-2" id="chessId" name="puzzleId" required
                                onChange={this.handleChange}>
                            {/*    @php*/}
                            {/*    use App\Models\Puzzle;*/}

                            {/*    $puzzles = Puzzle::all();*/}
                            {/*    foreach ($puzzles as $puzzle) {*/}
                            {/*    $id = $puzzle->puzzleId;*/}
                            {/*    echo "<option value=$id>$id</option>";*/}
                            {/*}*/}
                            {/*    @endphp*/}
                        </select>
                        <input className="btn btn-primary ml-sm-2 mt-sm-2" id="submit" type="submit" name="entering"/>
                    </form>
                </div>
                <div className="row justify-content-center mt-sm-3" id="puzzlePhoto">
                    <img id="photo" alt=""/>
                </div>
            </div>

        );
    }
}

export default PuzzleChoosing;

if (document.getElementById('puzzleChoosing')) {
    ReactDOM.render(<PuzzleChoosing/>, document.getElementById('puzzleChoosing'));
}
