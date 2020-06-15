import React from 'react';
import { useDispatch } from 'react-redux';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { clearOverlay } from '../../store/actions';
import './OverlayHeader.scss';

const OverlayHeader = ({ title }) => {
  const dispatch = useDispatch();

  const onHandleClose = () => {
    dispatch(clearOverlay());
  }

  return (
    <div className="overlay-header">
      <button className="overlay-header__close"
        onClick={onHandleClose}
      >
          <IoMdArrowRoundBack />
      </button>

      <div className="overlay-header__title">
        {title}
      </div>
    </div>
  );
}

export default OverlayHeader;