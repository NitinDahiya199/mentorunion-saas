import React from 'react';
import { findPageConfig } from '../../../data/informationArchitecture';
import { getIcon } from '../../Icons/SVGs';

const ArchitecturePage = ({ roleId, pageId, onNavigate }) => {
  const { role, page, parent } = findPageConfig(roleId, pageId);
  const relatedFlows = role.flows.filter(
    (flow) => flow.relatedPages.includes(page.id) || (parent && flow.relatedPages.includes(parent.id))
  );
  const directChildren = page.children || [];
  const totalSubmodules = role.modules.reduce(
    (count, module) => count + (module.children?.length || 0),
    0
  );
  const topLevelModuleCount = role.modules.length;
  const isRoleOverview = page.id === role.defaultPage;

  const summaryCards = [
    { label: 'Primary Modules', value: topLevelModuleCount, icon: 'fa-th' },
    { label: 'Submodules', value: parent ? 0 : (isRoleOverview ? totalSubmodules : directChildren.length), icon: 'fa-plus' },
    { label: 'Key Actions', value: page.actions.length, icon: 'fa-bolt' },
    { label: 'Linked Flows', value: relatedFlows.length, icon: 'fa-history' }
  ];

  return (
    <div className="architecture-page" style={{ '--page-accent': role.accent }}>
      <div className="page-header">
        <div className="page-title">
          {parent && (
            <div className="architecture-breadcrumb">
              <span>{parent.label}</span>
              <span className="architecture-breadcrumb-separator">/</span>
              <span>{page.label}</span>
            </div>
          )}
          <h1>
            {page.label} <span className={`role-indicator indicator-${roleId}`}>{role.label}</span>
          </h1>
          <p>{page.purpose}</p>
        </div>
        <div className="architecture-header-actions">
          <span className="architecture-meta-chip">{role.screenCount} screens in role</span>
          <span className="architecture-meta-chip">{role.flowCount} core flows</span>
        </div>
      </div>

      <div className="architecture-summary-grid">
        {summaryCards.map((item) => (
          <div key={item.label} className="architecture-summary-card">
            <div className="architecture-summary-icon">{getIcon(item.icon, 18)}</div>
            <div>
              <div className="architecture-summary-value">{item.value}</div>
              <div className="architecture-summary-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="architecture-grid">
        <section className="card architecture-card">
          <div className="card-header">
            <h2 className="card-title">Purpose & Coverage</h2>
          </div>
          <p className="architecture-card-copy">
            {parent
              ? `${page.label} is a focused submodule inside ${parent.label}. It breaks the PDF architecture down into a more actionable operational area while staying inside the same role workflow.`
              : `This module is part of the ${role.label} screen inventory and is represented as a first-class navigation area in the updated app structure.`}
          </p>
          <div className="architecture-tag-row">
            <span className="architecture-tag">Role: {role.label}</span>
            <span className="architecture-tag">Module: {parent ? parent.label : page.label}</span>
            <span className="architecture-tag">Depth: {parent ? 'Submodule' : 'Primary module'}</span>
          </div>
        </section>

        <section className="card architecture-card">
          <div className="card-header">
            <h2 className="card-title">Key Components</h2>
          </div>
          <ul className="architecture-list">
            {page.components.map((component) => (
              <li key={component}>{component}</li>
            ))}
          </ul>
        </section>

        <section className="card architecture-card">
          <div className="card-header">
            <h2 className="card-title">Key Actions</h2>
          </div>
          <ul className="architecture-list">
            {page.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </section>

        <section className="card architecture-card">
          <div className="card-header">
            <h2 className="card-title">{isRoleOverview ? 'Role Scope' : 'Role Responsibilities'}</h2>
          </div>
          <p className="architecture-card-copy">{role.summary}</p>
          <ul className="architecture-list architecture-list-compact">
            {role.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {parent && (
        <section className="card architecture-card">
          <div className="card-header">
            <h2 className="card-title">Parent Module Context</h2>
            <button className="btn btn-secondary" onClick={() => onNavigate(parent.id)}>
              {getIcon(parent.icon, 16)} Open {parent.label}
            </button>
          </div>
          <p className="architecture-card-copy">{parent.purpose}</p>
        </section>
      )}

      {!parent && directChildren.length > 0 && (
        <section className="card architecture-card">
          <div className="card-header">
            <h2 className="card-title">Submodules</h2>
            <span className="architecture-section-note">Expanded from the PDF component and action detail</span>
          </div>
          <div className="architecture-submodule-grid">
            {directChildren.map((child) => (
              <div key={child.id} className="architecture-submodule-card">
                <div className="architecture-submodule-header">
                  <div className="architecture-submodule-icon">{getIcon(child.icon || page.icon, 16)}</div>
                  <h3>{child.label}</h3>
                </div>
                <p>{child.purpose}</p>
                <div className="architecture-submodule-meta">
                  <span>{child.components.length} components</span>
                  <span>{child.actions.length} actions</span>
                </div>
                <button className="btn btn-secondary architecture-submodule-btn" onClick={() => onNavigate(child.id)}>
                  Explore
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {isRoleOverview && (
        <section className="card architecture-card">
          <div className="card-header">
            <h2 className="card-title">Module Landscape</h2>
            <span className="architecture-section-note">All primary modules surfaced from the information architecture</span>
          </div>
          <div className="architecture-submodule-grid">
            {role.modules.map((module) => (
              <div key={module.id} className="architecture-submodule-card architecture-module-card">
                <div className="architecture-submodule-header">
                  <div className="architecture-submodule-icon">{getIcon(module.icon, 16)}</div>
                  <h3>{module.label}</h3>
                </div>
                <p>{module.purpose}</p>
                <div className="architecture-submodule-meta">
                  <span>{module.children?.length || 0} submodules</span>
                  <span>{module.actions.length} actions</span>
                </div>
                <button className="btn btn-secondary architecture-submodule-btn" onClick={() => onNavigate(module.id)}>
                  Open Module
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="card architecture-card">
        <div className="card-header">
          <h2 className="card-title">Related User Flows</h2>
          <span className="architecture-section-note">
            {relatedFlows.length > 0
              ? 'Flows mapped from the PDF to this module path'
              : 'No direct flow is anchored to this page, but the role architecture remains fully connected'}
          </span>
        </div>
        {relatedFlows.length > 0 ? (
          <div className="architecture-flow-list">
            {relatedFlows.map((flow) => (
              <div key={flow.title} className="architecture-flow-item">
                <h3>{flow.title}</h3>
                <ol className="architecture-flow-steps">
                  {flow.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state architecture-empty-state">
            {getIcon('fa-history', 48)}
            <h3>Flow detail lives higher in the role map</h3>
            <p>Open the role dashboard or parent module to review the broader end-to-end journeys.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ArchitecturePage;
