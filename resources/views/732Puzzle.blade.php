@extends('main')

@section('content')
    <div class="indexes8">8</div>
    <div class="indexes7">7</div>
    <div class="indexes6">6</div>
    <div class="indexes5">5</div>
    <div class="indexes4">4</div>
    <div class="indexes3">3</div>
    <div class="indexes2">2</div>
    <div class="indexes1">1</div>
    <div class="indexesA">a</div>
    <div class="indexesB">b</div>
    <div class="indexesC">c</div>
    <div class="indexesD">d</div>
    <div class="indexesE">e</div>
    <div class="indexesF">f</div>
    <div class="indexesG">g</div>
    <div class="indexesH">h</div>
    <div id="puzzle">

        <table>
            <tr>
                <td class="white"><img src="../images/rookB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"><img src="../images/kingB.png" style="max-width:100%; max-height:100%;"/></td>
            </tr>
            <tr>
                <td class="black"></td>
                <td class="white"><img src="../images/queenB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
                <td class="white"><img src="../images/knightB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
                <td class="white"><img src="../images/pawnB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"><img src="../images/rookB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="white"><img src="../images/pawnB.png" style="max-width:100%; max-height:100%;"/></td>
            </tr>
            <tr>
                <td class="white"><img src="../images/pawnB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"><img src="../images/pawnB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"><img src="../images/knightW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="white"></td>
                <td class="black"><img src="../images/queenW.png" style="max-width:100%; max-height:100%;"/></td>
            </tr>
            <tr>
                <td class="black"></td>
                <td class="white"><img src="../images/pawnB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
                <td class="white"><img src="../images/bishopB.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"></td>
            </tr>
            <tr>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"><img src="../images/rookW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
            </tr>
            <tr>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"><img src="../images/pawnW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="white"></td>
            </tr>
            <tr>
                <td class="white"><img src="../images/pawnW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"><img src="../images/pawnW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"><img src="../images/pawnW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"><img src="../images/pawnW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="white"></td>
                <td class="black"><img src="../images/pawnW.png" style="max-width:100%; max-height:100%;"/></td>
            </tr>
            <tr>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"></td>
                <td class="white"><img src="../images/rookW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="black"></td>
                <td class="white"></td>
                <td class="black"><img src="../images/kingW.png" style="max-width:100%; max-height:100%;"/></td>
                <td class="white"></td>
            </tr>

        </table>
    </div>
    <div id="linksDiv">
        <p class="links">
            <a href="https://en.wikipedia.org/wiki/Rules_of_chess">
                The rules of chess
            </a>
        </p>
        @php
            use App\Models\Puzzle;
            $puzzle = Puzzle::where(['puzzleId' => '732'])->first();
            echo "<p class='links'><a href=" . $puzzle->originLink . ">Original puzzle</a></p>";
        @endphp
    </div>
    <div id="othersFunctions">
        <button id="timer" class="buttons" onclick="timer()">Timer</button>
        <a href="{{route('732histogram')}}"><button id="histogram" class="buttons">Histogram</button></a>
    </div>
@endsection
