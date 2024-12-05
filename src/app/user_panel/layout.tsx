import Header from '@/components/Header';
import { ResponsiveNavContainer } from '@/components/ResponsiveNavContainer';
import UserPanelContainer from '@/components/UserPanel/UserPanelContainer';

export default async function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ResponsiveNavContainer>
      <Header />
      <UserPanelContainer />
      <main
        style={{
          padding: '1rem',
          marginTop: '60px',
          marginBottom: '3rem',
        }}
      >
        {children}
      </main>
    </ResponsiveNavContainer>
  );
}
