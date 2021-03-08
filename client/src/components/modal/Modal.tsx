import React, { ReactNode } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import useKey from '../../hooks/useKey';
import { ReactElement } from 'react';
import Button from '../button/Button';
import {
  ModalWrapper,
  ModalHeader,
  HeaderText,
  ModalClose,
  ModalContent,
  ModalBody,
  ModalBodyHeader,
  ModalBodyContainer,
  ModalFooter,
} from './Style';

interface StyleOptions {
  solidSuccess?: boolean;
  solidPrimary?: boolean;
  solidWarning?: boolean;
  solidDanger?: boolean;
  outlinePrimary?: boolean;
  outlineWarning?: boolean;
  outlineDanger?: boolean;
  outlineSuccess?: boolean;
  circlePrimary?: boolean;
  circleWarning?: boolean;
  circleDanger?: boolean;
  circleSuccess?: boolean;
}
interface SizeOptions {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

interface ModalProps {
  headerText: string;
  bodyHeaderText?: string;
  bodyText: string | ReactNode;
  show: boolean;
  close: () => void;
  confirm: () => void;
  confirmText?: string;
  confirmStyle?: StyleOptions;
  cancelStyle?: StyleOptions;
  showCancel?: boolean;
  showConfirm?: boolean;
  cancelIcon?: JSX.Element;
  confirmIcon?: JSX.Element;
  confirmSize?: SizeOptions;
  cancelSize?: SizeOptions;
}

const Modal = ({
  headerText,
  bodyHeaderText,
  bodyText,
  show,
  close,
  confirm,
  confirmText,
  confirmStyle = { solidSuccess: true },
  cancelStyle = { solidDanger: true },
  confirmSize = { medium: true },
  cancelSize = { medium: true },
  showCancel = true,
  showConfirm = true,
  cancelIcon,
  confirmIcon,
}: ModalProps): ReactElement => {
  useKey('Escape', close);

  return (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames='item'>
        <ModalWrapper
          style={{
            transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
            display: show ? 'block' : 'none',
          }}
        >
          <ModalHeader>
            <HeaderText>{headerText}</HeaderText>
            <ModalClose onClick={close}>x</ModalClose>
          </ModalHeader>
          <ModalContent>
            <ModalBodyContainer>
              <ModalBodyHeader>{bodyHeaderText}</ModalBodyHeader>
              <ModalBody>{bodyText}</ModalBody>
            </ModalBodyContainer>
            <ModalFooter>
              {showCancel && (
                <Button
                  onClick={close}
                  {...cancelStyle}
                  type='button'
                  {...cancelSize}
                  label='Cancel'
                  children={cancelIcon}
                />
              )}
              {showConfirm && (
                <Button
                  onClick={confirm}
                  {...confirmStyle}
                  type='button'
                  {...confirmSize}
                  label={confirmText}
                  children={confirmIcon}
                />
              )}
            </ModalFooter>
          </ModalContent>
        </ModalWrapper>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Modal;
