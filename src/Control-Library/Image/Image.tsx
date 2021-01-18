import React, { useEffect, useRef, useState } from 'react';
import classNames from '../-General/General';
import MDIcon, { IconType } from '../Icon/Icon';
import MDSpinner from '../Spinner/MDSpinner';

import './Image.scss'

interface iProps {
    Source: string,
    Alt: string,
    ClassName?: string,
    Width?: string,
    Height?: string,
    Style?: React.CSSProperties,
}

const MDImage: React.FunctionComponent<iProps> = (props: iProps) => {
    const [imageSrc, setImageSrc] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    const imageRef = useRef<HTMLImageElement>(null);
    /*-------------------------------------------------------------------------------------------*/
    const LoaadImage = () => {
        if (!shouldLoad)
            return;

        const img = new Image();
        setIsLoading(true);
        img.src = props.Source;

        img.addEventListener("load", () => {
            setIsLoading(false);
            setImageSrc(img.src);
        });

        img.addEventListener("error", () => {
            setIsError(false);
        });
    }
    /*-------------------------------------------------------------------------------------------*/
    useEffect(() => {
        let observer: IntersectionObserver;
        let didCancel = false;

        if (imageSrc !== props.Source) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                                setShouldLoad(true);
                                imageRef.current && observer.unobserve(imageRef.current)
                            }
                        })
                    },
                    {
                        threshold: 0.01,
                        rootMargin: '25%',
                    }
                )
                imageRef.current && observer.observe(imageRef.current)
            } else {
                setShouldLoad(true);
            }
        }
        return () => {
            didCancel = true
            if (observer && observer.unobserve) {
                imageRef.current && observer.unobserve(imageRef.current)
            }
        }
    }, [props.Source])
    /*-------------------------------------------------------------------------------------------*/
    useEffect(() => {
        LoaadImage();
    }, [shouldLoad]);
    /*-------------------------------------------------------------------------------------------*/
    if (!shouldLoad) {
        return (<img
            ref={imageRef}
            alt={props.Alt}
            height={props.Height ? props.Height : '300px'}
            width={props.Width ? props.Width : '300px'}
        />);
    }
    else {
        if (isError) {
            return (
                <div className='md-image'>
                    <MDIcon IconType={IconType.Redo} />
                </div>);
        }
        else if (isLoading) {
            return (<div className='md-image'>
                <MDSpinner Height={props.Height ? props.Height : ''}
                           Width={props.Width ? props.Width : ''} />
            </div>);
        }
        else {
            return (
                <img
                    className={classNames(['md-image', props.ClassName ? props.ClassName : ''])}
                    ref={imageRef}
                    src={imageSrc}
                    alt={props.Alt}
                    height={props.Height ? props.Height : ''}
                    width={props.Width ? props.Width : ''}
                />
            );
        }
    }
};

export default MDImage;