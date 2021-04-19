<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Chess puzzle</title>
    <link href="{{ asset('css/style.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
</head>
<body>

@yield('content')

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

