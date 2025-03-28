type Props = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: Props) => {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
