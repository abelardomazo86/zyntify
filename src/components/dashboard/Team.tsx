import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Mail, 
  Shield, 
  MoreVertical, 
  Edit,
  Trash2,
  Clock,
  CheckCircle,
  XCircle,
  Activity,
  Settings,
  Crown,
  Eye,
  MessageSquare,
  FileText,
  Calendar,
  AlertCircle,
  Plus
} from 'lucide-react';
import { useSubscription } from '../../contexts/SubscriptionContext';

const Team: React.FC = () => {
  const { canUseFeature } = useSubscription();
  const [activeTab, setActiveTab] = useState('members');
  const [showInviteModal, setShowInviteModal] = useState(false);

  const hasCollaboration = canUseFeature('collaboration');

  const members = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@techstart.com',
      role: 'Owner',
      permissions: ['All Access'],
      status: 'Active',
      lastActive: '2 hours ago',
      joinedDate: '2024-12-01',
      avatar: 'JS',
      tasksAssigned: 12,
      tasksCompleted: 8,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@techstart.com',
      role: 'Manager',
      permissions: ['View Reports', 'Run Analysis', 'Manage Team'],
      status: 'Active',
      lastActive: '1 day ago',
      joinedDate: '2025-01-15',
      avatar: 'SJ',
      tasksAssigned: 8,
      tasksCompleted: 6,
    },
    {
      id: '3',
      name: 'Mike Chen',
      email: 'mike@techstart.com',
      role: 'Analyst',
      permissions: ['View Reports', 'Run Analysis'],
      status: 'Active',
      lastActive: '3 days ago',
      joinedDate: '2025-01-20',
      avatar: 'MC',
      tasksAssigned: 5,
      tasksCompleted: 4,
    },
  ];

  const invites = [
    {
      id: '1',
      email: 'alex@techstart.com',
      role: 'Analyst',
      sentDate: '2025-02-10',
      status: 'Pending',
      expiresDate: '2025-02-17',
      sentBy: 'John Smith',
    },
    {
      id: '2',
      email: 'lisa@techstart.com',
      role: 'Manager',
      sentDate: '2025-02-08',
      status: 'Expired',
      expiresDate: '2025-02-15',
      sentBy: 'John Smith',
    },
  ];

  const tasks = [
    {
      id: '1',
      title: 'Complete Q1 Financial Analysis',
      assignedTo: 'Sarah Johnson',
      assignedBy: 'John Smith',
      dueDate: '2025-02-20',
      status: 'In Progress',
      priority: 'High',
      business: 'TechStart Solutions',
      description: 'Analyze Q1 financial performance and prepare recommendations',
    },
    {
      id: '2',
      title: 'Competitor Research Update',
      assignedTo: 'Mike Chen',
      assignedBy: 'Sarah Johnson',
      dueDate: '2025-02-18',
      status: 'Pending',
      priority: 'Medium',
      business: 'TechStart Solutions',
      description: 'Update competitor analysis with latest market data',
    },
    {
      id: '3',
      title: 'Team Onboarding Documentation',
      assignedTo: 'Sarah Johnson',
      assignedBy: 'John Smith',
      dueDate: '2025-02-25',
      status: 'Completed',
      priority: 'Low',
      business: 'General',
      description: 'Create comprehensive onboarding guide for new team members',
    },
  ];

  const activityLog = [
    {
      id: '1',
      user: 'Sarah Johnson',
      action: 'completed task',
      target: 'Team Onboarding Documentation',
      timestamp: '2 hours ago',
      type: 'task',
    },
    {
      id: '2',
      user: 'Mike Chen',
      action: 'ran analysis',
      target: 'Competitor Analysis',
      timestamp: '1 day ago',
      type: 'analysis',
    },
    {
      id: '3',
      user: 'John Smith',
      action: 'invited',
      target: 'alex@techstart.com',
      timestamp: '2 days ago',
      type: 'invite',
    },
    {
      id: '4',
      user: 'Sarah Johnson',
      action: 'updated business settings',
      target: 'TechStart Solutions',
      timestamp: '3 days ago',
      type: 'settings',
    },
  ];

  const roles = [
    {
      name: 'Owner',
      description: 'Full access to all features and settings',
      permissions: ['All Access'],
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900',
    },
    {
      name: 'Manager',
      description: 'Can manage team and access most features',
      permissions: ['View Reports', 'Run Analysis', 'Manage Team', 'View Settings'],
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900',
    },
    {
      name: 'Analyst',
      description: 'Can run analysis and view reports',
      permissions: ['View Reports', 'Run Analysis'],
      color: 'text-green-600 bg-green-100 dark:bg-green-900',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Completed':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      case 'Pending':
      case 'In Progress':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
      case 'Expired':
        return 'text-red-600 bg-red-100 dark:bg-red-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 bg-red-100 dark:bg-red-900';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900';
      case 'Low':
        return 'text-green-600 bg-green-100 dark:bg-green-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'analysis':
        return <Activity className="h-4 w-4 text-blue-600" />;
      case 'task':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'invite':
        return <Users className="h-4 w-4 text-purple-600" />;
      case 'settings':
        return <Settings className="h-4 w-4 text-orange-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  if (!hasCollaboration) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Team & Collaboration
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Manage team members, roles, and permissions
          </p>
        </div>

        <div className="min-h-96 flex items-center justify-center">
          <div className="text-center glass-card rounded-3xl shadow-2xl p-12 glow">
            <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Collaboration Add-on Required
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Team collaboration features are available as an add-on. Purchase the Collaboration add-on to access 
              team management, task assignment, and activity tracking features.
            </p>
            <button className="gradient-primary hover:shadow-2xl text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 glow-hover">
              Get Collaboration Add-on
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Team & Collaboration
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Manage team members, roles, and permissions
          </p>
        </div>
        
        <button 
          onClick={() => setShowInviteModal(true)}
          className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 glow-hover"
        >
          <UserPlus className="h-4 w-4" />
          <span>Invite Member</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Team Members</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pending Invites</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">25</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Active Tasks</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl gradient-primary shadow-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">18</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Actions Today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl shadow-xl">
        <div className="flex border-b border-white/10 dark:border-gray-700/30">
          {[
            { id: 'members', label: 'Members' },
            { id: 'tasks', label: 'Tasks' },
            { id: 'invites', label: 'Invites' },
            { id: 'permissions', label: 'Roles & Permissions' },
            { id: 'activity', label: 'Activity Log' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-white/10 dark:bg-gray-700/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'members' && (
            <div className="space-y-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 gradient-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-semibold">{member.avatar}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {member.name}
                          </h3>
                          {member.role === 'Owner' && (
                            <Crown className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {member.email}
                        </p>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                          <span>Role: {member.role}</span>
                          <span>•</span>
                          <span>Last active: {member.lastActive}</span>
                          <span>•</span>
                          <span>Tasks: {member.tasksCompleted}/{member.tasksAssigned}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                      <button className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Team Tasks
                </h3>
                <button className="gradient-primary hover:shadow-2xl text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 glow-hover">
                  <Plus className="h-4 w-4" />
                  <span>New Task</span>
                </button>
              </div>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {task.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {task.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span>Assigned to: {task.assignedTo}</span>
                          <span>•</span>
                          <span>By: {task.assignedBy}</span>
                          <span>•</span>
                          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{task.business}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'invites' && (
            <div className="space-y-4">
              {invites.map((invite) => (
                <div
                  key={invite.id}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {invite.email}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <span>Role: {invite.role}</span>
                        <span>•</span>
                        <span>Sent by: {invite.sentBy}</span>
                        <span>•</span>
                        <span>Sent: {new Date(invite.sentDate).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Expires: {new Date(invite.expiresDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(invite.status)}`}>
                        {invite.status}
                      </span>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Resend
                      </button>
                      <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'permissions' && (
            <div className="space-y-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {role.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${role.color}`}>
                          {role.name}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {role.description}
                      </p>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Edit
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Permissions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission, permIndex) => (
                        <span
                          key={permIndex}
                          className="px-3 py-1 glass text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              {activityLog.map((activity) => (
                <div
                  key={activity.id}
                  className="glass rounded-2xl p-6 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 glass rounded-lg">
                      {getActivityIcon(activity.type)}
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white">
                        <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
          <div className="glass-card rounded-3xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Invite Team Member
              </h2>
              <button
                onClick={() => setShowInviteModal(false)}
                className="p-2 glass hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white">
                  <option value="">Select role</option>
                  <option value="manager">Manager</option>
                  <option value="analyst">Analyst</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent glass-card text-gray-900 dark:text-white"
                  placeholder="Add a personal message..."
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-white/10 dark:border-gray-700/30">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="px-6 py-3 glass hover:bg-white/20 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="gradient-primary hover:shadow-2xl text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 glow-hover"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;