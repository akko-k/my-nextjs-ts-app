const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <aside className="bg-gray-200 p-4">
        <ul>
          <li>
            <a href="/dashboard">Dashboard Home</a>
          </li>
          <li>
            <a href="/dashboard/settings">Settings</a>
          </li>
        </ul>
      </aside>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
