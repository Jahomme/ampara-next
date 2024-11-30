import Header from '@/components/Header';
import UserPanelContainer from '@/components/UserPanelContainer';

export default async function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div style={{ paddingLeft: '15vw' }}>
      <Header />
      <UserPanelContainer />
      <main
        style={{
          padding: '1rem',
          marginTop: '60px',
        }}
      >
        {children}
      </main>
    </div>
  );
}
