import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Modal as PooperModal } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
export default function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <div>
            <Tippy
                interactive
                placement="bottom-start"
                offset={[10, 10]}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1">
                        <PooperModal className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title="Language"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            {renderItems()}
                        </PooperModal>
                    </div>
                )}
                onHide={() => {
                    setHistory((prev) => prev.slice(0, 1));
                }}
            >
                {children}
            </Tippy>
        </div>
    );
}
