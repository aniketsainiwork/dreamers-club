import React, { ReactNode, useEffect, useState } from 'react';

const MessageModal = ({ children }: { children: ReactNode }) => {
    const [handler, setHandler] = React.useState<{
        msgTyp?: 'error' | 'success';
        message: string;
        isVisible: boolean;
        successFn?: () => void;
    }>({
        msgTyp: 'error',
        message: '',
        isVisible: false,
    });
    useEffect(() => {
        showMessage = ({ message, msgTyp, successFn }) => {
            setHandler({
                isVisible: true,
                message,
                msgTyp,
                ...(successFn && { successFn }),
            });
            return null;
        };

        hideMessage = () => {
            setHandler({ ...handler, isVisible: false });
            return null;
        };
    }, [handler]);

    const [animationClass, setAnimationClass] = useState<string>('fadeInAnimation')

    useEffect(() => {
        if (handler.isVisible) {
            setAnimationClass('fadeInAnimation')
            setTimeout(myGreeting, 3000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handler])

    const myGreeting = () => {
        setAnimationClass('fadeOutAnimation')

        setHandler({
            ...handler,
            isVisible: false
        })
    }

    return (
        <div>
            {children}
            {handler.isVisible ? (

                <div className={`alertMessageContainerOuter ${animationClass}`}>
                    <div
                        style={{
                            backgroundColor: handler.msgTyp === 'error' ? '#bd362f' : '#51a351',
                        }}
                        className={`alertMessageContainer p-3`}>
                        <div
                            style={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: '#FFF',
                            }}>
                            <p>{handler.message}</p>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

// eslint-disable-next-line no-empty-pattern
export let showMessage = ({ }: {
    msgTyp?: 'error' | 'success';
    message: string;
    successFn?: () => void;
}) => null;
export let hideMessage = () => null;

export default MessageModal;
