@extends('main')

@section('content')
    @if ($errors->any())
        <div id="errors">
            <ul id="list">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="{{ route('startFormRequest') }}" method="POST" id="startFormId">
        @csrf
        <div id="userInfo">
            <label for="name" id="nameLabel">Enter your name</label>
            <input class="textBox" id="name" name="name" type="text" >

            <label for="surname">Enter your surname</label>
            <input class="textBox" id="surname" name="surname" type="text" >

            <label>Choose your chess skill level</label>
            <label><input name="level" type="radio" value="Beginner">Beginner</label>
            <label><input name="level" type="radio" value="Apprentice">Apprentice</label>
            <label><input name="level" type="radio" value="Adept">Adept</label>
            <label><input name="level" type="radio" value="Expert">Expert</label>
            <label><input name="level" type="radio" value="Master" >Master</label>
        </div>
        <div id="additionalInfo">
            <input id="hiddenText" name="text" type="hidden" value="some text">
            <label id="colorLabel" for="color">
                Choose font color
                <input id="color" name="color" type="color" onchange="colorHandler(this.value)">
            </label>
            <label id="birthdayLabel" for="birthday">Choose the date of birth</label>
            <input id="birthday" name="birthday" type="date">
            <label for="pass">Enter your password</label>
            <input id="pass" name="pass" type="password" min="6" max="20">
            <label for="file">Choose the file you want to send</label>
            <input id="file" name="file" type="file">
            <textarea name="comment" id="comment" maxlength="300" placeholder="Enter your comment"></textarea>
            <input class="buttons" id="submit" type="submit" name="entering" onclick="validateForm()">


        </div>
    </form>
@endsection
