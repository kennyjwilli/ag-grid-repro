import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata = {
  title: 'AG Repro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
