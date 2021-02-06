




export interface StarrdData {
    fork: boolean;
    forks: number;
    forks_count: number;
    forks_url: string;
    full_name: string;
    tags: Array<any>;
    description?: string;
}


export interface User {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    'gravatar_id': string;
    'url': string;
    'html_url': string;
    'followers_url': string;
    'following_url': string;
    'gists_url': string;
    'starred_url': string;
    'subscriptions_url': string;
    'organizations_url': string;
    'repos_url': string;
    'events_url': string;
    'received_events_url': string;
    'type': string;
    'site_admin': boolean;
    'name': string;
    'company': string;
    'blog': string;
    'location': any;
    'email': any;
    'hireable': any;
    'bio': string;
    'twitter_username': any;
    'public_repos': number;
    'public_gists': number;
    'followers': number;
    'following': number;
    'created_at': string;
    'updated_at': string;
    'private_gists': 0;
    'total_private_repos': number;
    'owned_private_repos': number;
    'disk_usage': number;
    'collaborators': number;
    'two_factor_authentication': boolean;
    'plan': any;
}


export interface PaginatorItem {
    pageIndex?: number;
    pageSize?: number;
    disabled?: boolean;
}
