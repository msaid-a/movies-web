import React, { CSSProperties } from 'react';
import Container from '../Container';
import classname from 'classnames';
import './style.css';

interface IRowProps {
  colPerRow?: '1' | '2' | '3' | '4',
  className?: string,
  style?: CSSProperties
}

const Row: React.FC<IRowProps> = (props) => {
  const className = classname(
    'app-flex-row',
    (`col-per-row-${props.colPerRow || 'default'}`),
    props.className
  );
  return (
    <Container className={className}>
      {props.children}
    </Container>
  );
}

interface IColProps {
  width?: string;
  className?: string,
}

const Col: React.FC<IColProps> = (props) => {
  const className = classname(
    'app-flex-col',
    props.className

  );
  const style: React.CSSProperties = {
    width: props.width,
  }
  return (
    <Container className={className} style={style}>
      {props.children}
    </Container>
  );
}

const Flex = {
  Row,
  Col
}

export default Flex;