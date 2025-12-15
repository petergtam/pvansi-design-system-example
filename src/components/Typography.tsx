import { TextProps } from 'react-native';
import { Text } from './Text';
import { HTMLProps } from 'react';

type OriginalTextProps = TextProps | HTMLProps<HTMLElement>;

export const LargeTitle2 = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="h1" {...props}>
      {children}
    </Text>
  );
};

export const LargeTitle = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="h2" {...props}>
      {children}
    </Text>
  );
};

export const Title = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="h3" {...props}>
      {children}
    </Text>
  );
};

export const Title2 = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="h4" {...props}>
      {children}
    </Text>
  );
};

export const Title3 = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="h5" {...props}>
      {children}
    </Text>
  );
};

export const Headline = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="h6" {...props}>
      {children}
    </Text>
  );
};

export const SubHeadline = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="subtitle1" {...props}>
      {children}
    </Text>
  );
};

export const SubHeadline2 = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="subtitle2" {...props}>
      {children}
    </Text>
  );
};

export const Body = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="body1" {...props}>
      {children}
    </Text>
  );
};

export const Body2 = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="body2" {...props}>
      {children}
    </Text>
  );
};

export const Caption = ({ children, ...props }: OriginalTextProps) => {
  return (
    <Text textTypeStyle="caption" {...props}>
      {children}
    </Text>
  );
};
