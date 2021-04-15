@extends('main')

@section('content')
    <canvas id="myChart" style="font-size: 20px;"></canvas>
    <script>
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'BRook', 'BKnight', 'BBishop', 'BKing', 'BQueen', 'BPawn',
                    'WRook', 'WKnight', 'WBishop', 'WKing', 'WQueen', 'WPawn',
                ],
                datasets: [{
                    label: 'Chess figures',
                    backgroundColor: [
                        "#85aa53", "#85aa53", "#85aa53", "#85aa53", "#85aa53", "#85aa53",
                        "#f1f1f1", "#f1f1f1", "#f1f1f1", "#f1f1f1", "#f1f1f1", "#f1f1f1",
                    ],
                    borderColor: 'rgb(12,36,231)',
                    data: [
                        2, 1, 1, 1, 1, 5,
                        2, 1, 0, 1, 1, 6,
                    ]
                }]
            },
            options: {}
        });
    </script>
@endsection

