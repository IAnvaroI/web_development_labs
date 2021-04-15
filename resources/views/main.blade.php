<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Chess</title>
    <link href="{{ asset('css/labs.css') }}" rel="stylesheet"/>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

</head>
<body>

<div id="container">
    @yield('content')
</div>

<script src="{{ asset('js/labs.js') }}"></script>
</body>
</html>

