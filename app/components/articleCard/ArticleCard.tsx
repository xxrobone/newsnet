import Link from 'next/link';
import Image from 'next/image';
import styles from './articleCard.module.scss';
import IMG from '@/public/images/01.jpg';
import { guardianNewsType } from '@/app/types/Types';
import { HighlightedText } from '../highlightedText/HighlightedText';

const ArticleCard = ({
  id,
  webTitle,
  fields,
  webUrl,
  sectionName

}: guardianNewsType) => {

  return (
    <div className={styles.cardWrapper}>
      <Link
        className={styles.external_link}
        href={webUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <HighlightedText title='Read Original Article' />
      </Link>
      <div className={styles.img}>
        <Image
          alt='news image'
          src={fields.thumbnail ? fields.thumbnail : IMG}
          fill
          priority
          className={styles.img}
          unoptimized={true}
        />
      </div>
      <div className={styles.info}>
        <p>written by</p>
        <h4>{webTitle}</h4>
        <p>{sectionName}</p>
      </div>
      <Link href={`/${id}`}>Read Arcticle</Link>
    </div>
  );
};

export default ArticleCard;
