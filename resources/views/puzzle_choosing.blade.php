@extends('main')

@section('content')
    @if (session()->has('success'))
        <div id="successMessage">
            @if(is_array(session('success')))
                <ul>
                    @foreach (session('success') as $message)
                        <li>{{ $message }}</li>
                    @endforeach
                </ul>
            @else
                {{ session('success') }}
            @endif
        </div>
    @endif
    <form action="{{ route('choosePuzzleFormRequest') }}" method="POST" id="puzzleChoosing">
        @csrf
        <label for="chessId">Choose ID of your game of chess</label>
        <select id="chessId" name="puzzleId" required onchange="idChoosing(this)">
            <option selected disabled>Choose ID</option>
            @php
                use App\Models\Puzzle;

                $puzzles = Puzzle::all();
                foreach ($puzzles as $puzzle) {
                    $id = $puzzle->puzzleId;
                    echo "<option value=$id>$id</option>";
                }
            @endphp
        </select>

        <input class="buttons" id="submit" type="submit" name="entering">
    </form>
    <div id="puzzlePhoto">
        <img id="photo"/>
    </div>
@endsection
