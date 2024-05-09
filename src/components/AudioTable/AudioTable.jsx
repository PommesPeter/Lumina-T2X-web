import clsx from 'clsx';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import styles from './AudioTable.module.css';

const AudioList = [
    {
        prompt: "Semiautomatic gunfire occurs with slight echo",
        auUrl: "/audios/semiautomatic_gunfire_occurs_with_slight_echo.wav",
        augtUrl: "/audios/semiautomatic_gunfire_occurs_with_slight_echo_gt.wav"
    },
    {
        prompt: "A telephone bell rings",
        auUrl: "/audios/a_telephone_bell_rings.wav",
        augtUrl: "/audios/a_telephone_bell_rings_gt.wav"
    },
    {
        prompt: "An engine running followed by",
        auUrl: "/audios/an_engine_running_followed_by_the_engine_revving_and_tires_screeching.wav",
        augtUrl: "/audios/an_engine_running_followed_by_the_engine_revving_and_tires_screeching_gt.wav"
    },
    {
        prompt: "Birds chirping with insects b",
        auUrl: "/audios/birds_chirping_with_insects_buzzing_and_outdoor_ambiance.wav",
        augtUrl: "/audios/birds_chirping_with_insects_buzzing_and_outdoor_ambiance_gt.wav"
    },
    {
        prompt: "Water trickling rapidly and d",
        auUrl: "/audios/water_trickling_rapidly_and_draining.wav",
        augtUrl: "/audios/water_trickling_rapidly_and_draining_gt.wav"
    },
    {
        prompt: "Thunderstorm sounds while rai",
        auUrl: "/audios/thunderstorm_sounds_while_raining.wav",
        augtUrl: "/audios/thunderstorm_sounds_while_raining_gt.wav"
    },
    {
        prompt: "Birds chirping repeatedly",
        auUrl: "/audios/birds_chirping_repeatedly.wav",
        augtUrl: "/audios/birds_chirping_repeatedly_gt.wav"
    },
    {
        prompt: "Several large bells ring",
        auUrl: "/audios/Several_large_bells_ring.wav",
        augtUrl: "/audios/Several_large_bells_ring_gt.wav"
    },
]

function AudioItem({
    prompt,
    auUrl,
    augtUrl
}) {

    return (
        <table class="table" align="center" style={{ tableLayout: 'fixed', wordBreak: 'break-word', width: '100%' }}>
        <thead>
        <tr>
            <td scope="col" width="33%" colSpan={2}>
            <font color="061E61">{prompt}</font>
            </td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                <audio controls="controls">
                    <source src={auUrl} autoplay="" />
                </audio>
            </td>
            <td>
                <audio controls="controls">
                    <source src={augtUrl} autoplay="" />
                </audio>
            </td>
        </tr>
        </tbody>
    </table>
    )
}

function AudioTable() {
    return (
        <div>
            {AudioList.map((props, idx) => (
                        <AudioItem key={idx} {...props} />
                ))} 
        </div>
    );
}

export default AudioTable;