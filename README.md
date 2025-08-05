# User Explorer

A React TypeScript application that displays a paginated and filterable table of users fetched from the Random User API.

## How to Run the Project

### Prerequisites

- Node.js (version 16 or higher)
- npm package manager

### Installation & Setup

1. Clone the repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Solution and Structure

### Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Filters.tsx
│   ├── Header.tsx
│   ├── Loader.tsx
│   ├── NoUsers.tsx
│   ├── Pagination.tsx
│   ├── Table.tsx
│   ├── TableContainer.tsx
│   └── UserTable.tsx
├── constants/
│   ├── api.ts
│   └── ui.ts
├── hooks/
│   ├── useFilters.ts
│   ├── usePagination.ts
│   └── useUsers.ts
├── types/
├── utils/
│   ├── getNationality.ts
│   └── updateURL.ts
├── App.tsx
├── index.css
└── main.tsx
```

### Implementation Overview

- **React Functional Components**: All components built using modern React hooks pattern
- **TypeScript**: Full type safety with interfaces for API responses and component props
- **Server-side Pagination**: Fetches 10 users per page from Random User API
- **Server-side Filtering**: Gender (All/Male/Female) and nationality filters with 5 predefined countries
- **Custom Hooks**: Logic separation with `useUsers`, `useFilters`, and `usePagination` hooks
- **URL State Persistence**: Current page and filter states are persisted in URL query parameters
- **Tailwind CSS**: Utility-first CSS framework for responsive design

### Key Features

- Paginated user table with server-side data fetching
- Gender and nationality filtering
- Loading states and error handling
- Reset filters functionality
- Responsive design for mobile and desktop
- URL parameter persistence for bookmarkable states

## Limitations and Known Issues

### Limitations

1. **Fixed Nationality Options**: Limited to 5 predefined nationalities (US, GB, FR, AU, DE) as per requirements
2. **No Data Caching**: Each page change or filter update triggers a new API request
3. **API Dependency**: Application requires active internet connection and relies on Random User API availability
