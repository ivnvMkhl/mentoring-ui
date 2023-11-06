import { FC, useEffect, useState } from 'react';

import styles from './TopBar.module.css';
import { Icon } from '../../primitives/Icon/Icon';
import { Avatar, Input } from 'antd';
import { Button } from '../../primitives/Button/Button';
const { Search } = Input;

const TopBar: FC = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  useEffect(() => {
    fetch('https://random.dog/woof')
      .then((result) => {
        return result.text();
      })
      .then((text) => {
        setAvatarUrl(`https://random.dog/${text}`);
      });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Icon kind="Project" size="l" />
        MentorHub
      </div>
      <div className={styles.topBar}>
        <Search
          placeholder="Поиск"
          style={{
            width: 500,
          }}
        />
        <div className={styles.userSection}>
          <Avatar size={48} src={avatarUrl} icon={<Icon kind="User" size="m" />} />
          <span className={styles.userName}>@UserName</span>
          <Button className={styles.bellIcon} icon={<Icon kind="Bell" size="m" />} type="text" />
        </div>
      </div>
    </div>
  );
};

export { TopBar };
