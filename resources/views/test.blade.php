<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Test</title>
    <link href="{{ asset('css/style.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

</head>
<body>

<div id="root">
</div>

{{--<div class="container-fluid">--}}
{{--    <div class="row">--}}
{{--        <div class="col-sm-8" style="background-color:lavender;">.col-sm-8</div>--}}
{{--        <div class="col-sm-2" style="background-color:lavenderblush;">.col-sm-2</div>--}}
{{--        <div class="col-sm-2" style="background-color:lavender;">.col-sm-2</div>--}}
{{--    </div>--}}
{{--</div>--}}

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

