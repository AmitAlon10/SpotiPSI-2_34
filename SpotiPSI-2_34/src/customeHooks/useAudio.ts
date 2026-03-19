import { useEffect, useRef, useState } from "react";
import type { Song } from "../types/Types";

const useAudio = () => {

    const [currentSong, setCurrentSong] = useState<Song | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [queue, setQueue] = useState<Song[]>([])
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(new Audio())

    useEffect(() => {
        if (currentSong) {
            audioRef.current = new Audio(`/songs/${currentSong.id}.mp3`)
        }
        else {
            audioRef.current = new Audio()
        }
    }, [currentSong])

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause()
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.addEventListener('ended', () => setIsPlaying(false));
        return () => {
            audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);

    const play = (song: Song, queue: Song[]) => {
        setQueue(queue);
        setIsPlaying(true);
        setCurrentSong(song);
    }

    const togglePlayPause = () => {
        setIsPlaying(prev => !prev)
    }

    const playNext = () => {
        if (queue.length == 0 || currentSong === null) {
            return
        }
        const indexSong = queue.indexOf(currentSong);
        setIsPlaying(true);
        setCurrentSong(queue[(indexSong + 1) % queue.length]);
    }

    const playPrev = () => {
        if (queue.length == 0 || currentSong === null) {
            return
        }
        const indexSong = queue.indexOf(currentSong);
        setIsPlaying(true);
        setCurrentSong(queue[(indexSong + queue.length - 1) % queue.length]);
    }
    
    return { currentSong, isPlaying, queue, currentTime, duration, play, togglePlayPause, playNext, playPrev };
};

export default useAudio