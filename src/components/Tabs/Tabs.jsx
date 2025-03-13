export const Tabs = ({ tabs, activeTabId, onTabSelect }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === activeTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault();
                onTabSelect(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
