import React from "react";
import { IMAGE_PATH } from "../../constant/uploadConstant";
import styles from './Item.module.css'

const Item = ({book}) => {
  return (
    <div>
      <div className={styles.item}>
        <img src={`${IMAGE_PATH}/${book.imgList[0].attachedFileName}`} />
        <p>{book.bookName}</p>
        <p>{'￦' + book.bookPrice.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Item;
