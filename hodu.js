

// kakao 지도 위치

    var mapContainer = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);