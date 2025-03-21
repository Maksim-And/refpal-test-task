interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <section className="w-[1230px]">{children}</section>;
};

export default Container;
