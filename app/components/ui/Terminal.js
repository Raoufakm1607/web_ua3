'use client';

import { useState, useEffect, useRef } from 'react';

const Terminal = ({ lines = [], onComplete = () => {} }) => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [isComplete, setIsComplete] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);
    const terminalRef = useRef(null);

    // Charger toutes les lignes presque instantanément
    useEffect(() => {
        // Ajouter immédiatement toutes les lignes sauf la dernière
        setDisplayedLines(lines.slice(0, -1));

        // Ajouter la dernière ligne après un très court délai (pour l'effet)
        setTimeout(() => {
            setDisplayedLines(lines);
            setIsComplete(true);

            // Notifier que l'animation est terminée
            setTimeout(() => {
                onComplete();
            }, 100);
        }, 200);

        // Faire défiler le terminal vers le bas
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines, onComplete]);

    // Effet de clignotement du curseur
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => clearInterval(cursorTimer);
    }, []);

    const terminalStyle = {
        width: '100%',
        maxWidth: '32rem',
        backgroundColor: '#300A24',
        border: '2px solid #9D4EDD',
        borderRadius: '0.375rem',
        overflow: 'hidden',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
    };

    const terminalBarStyle = {
        backgroundColor: '#1A1A1D',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #9D4EDD',
    };

    const circlesContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    };

    const circleStyle = {
        width: '0.75rem',
        height: '0.75rem',
        borderRadius: '50%',
    };

    const redCircleStyle = {
        ...circleStyle,
        backgroundColor: '#F44336',
    };

    const yellowCircleStyle = {
        ...circleStyle,
        backgroundColor: '#FFC107',
    };

    const greenCircleStyle = {
        ...circleStyle,
        backgroundColor: '#4EFA8B',
    };

    const titleStyle = {
        fontSize: '0.875rem',
        color: '#F0F0F0',
        fontFamily: "'Ubuntu Mono', monospace",
    };

    const terminalBodyStyle = {
        backgroundColor: '#300A24',
        padding: '1rem',
        fontFamily: "'Ubuntu Mono', monospace",
        color: '#4EFA8B',
        overflow: 'auto',
        height: '20rem',
    };

    const lineStyle = {
        marginBottom: '0.25rem',
        whiteSpace: 'pre-wrap',
        textShadow: '0 0 5px rgba(78, 250, 139, 0.5)',
    };

    const promptStyle = {
        color: '#9D4EDD',
    };

    const cursorStyle = {
        display: 'inline-block',
        width: '0.5rem',
        height: '1rem',
        backgroundColor: '#4EFA8B',
        marginLeft: '0.25rem',
        animation: 'blink 1s step-end infinite',
    };

    return (
        <div style={terminalStyle}>
            <div style={terminalBarStyle}>
                <div style={circlesContainerStyle}>
                    <div style={redCircleStyle}></div>
                    <div style={yellowCircleStyle}></div>
                    <div style={greenCircleStyle}></div>
                </div>
                <div style={titleStyle}>akroum@portfolio:~</div>
                <div></div>
            </div>

            <div
                style={terminalBodyStyle}
                ref={terminalRef}
            >
                {displayedLines.map((line, index) => (
                    <div key={index} style={lineStyle}>
                        <span style={promptStyle}>akroum@portfolio:~$</span> {line}
                    </div>
                ))}

                {isComplete && cursorVisible && (
                    <div style={lineStyle}>
                        <span style={promptStyle}>akroum@portfolio:~$</span> <span style={cursorStyle}></span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;