import React, { useEffect, useRef } from 'react';
import './Introduction.css'

const Map = () => {
    const mapContainer = useRef(null);
    const { kakao } = window;
    const position = new kakao.maps.LatLng(37.58244443430669, 127.01021192207436);
    const mapOptions = {
        center: position, // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    useEffect(() => {
        const map = new kakao.maps.Map(mapContainer.current, mapOptions);
        const marker = new kakao.maps.Marker({ position }); // 마커 생성
        
        const content = `
            <div class="customoverlay">
            <span>한성대</span>
            </div>`;

        new kakao.maps.CustomOverlay({
            map,
            position,
            content
        });

        marker.setMap(map);
        }, []);

    return (
        <div
        id="map"
        ref={mapContainer}
        style={{ width: '100%', height: '430px', display: 'block', borderRadius: '30px',
                border: '2px solid #e8e8e8'
        }}
        ></div>
    );
};

export default Map;