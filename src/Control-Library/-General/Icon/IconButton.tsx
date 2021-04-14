import React from 'react';

const IconButton: React.FunctionComponent = () =>
    <svg height="512" viewBox="0 0 512 512" width="512">
        <path d="m407.032 0h-302.064c-33.066 0-59.968 26.916-59.968 60v100c0 33.084 26.902 60 59.968 60h76.485l-.873 78.58c-3.748-3.65-8.116-6.511-12.973-8.49-4.888-2-10.025-3-15.262-3h-.07c-6.586 0-13.153 1.65-19 4.77-4.478 2.351-8.126 5.91-10.275 10.04-1.929 3.631-2.898 7.83-2.888 12.49.01 4.93.989 9.44 1.959 13.2.779 3.03 3.158 10.74 3.448 11.71 1.709 5.73 1.949 9.24 1.959 11.91.02 1.77-.75 9.63-.779 12.39-.01 3.641.549 7.271 1.659 10.78 3.958 12.07 13.583 25.18 36.74 50.08 3.558 3.76 12.364 11.59 13.143 12.59.959 1.14 1.329 1.79 1.749 3.01.53 1.59.883 3.86.883 6.74v55.2c0 5.522 4.475 10 9.995 10h164.59c5.52 0 9.995-4.478 9.995-10v-39.159c1.203-.816 2.442-1.755 3.697-2.851 4.107-3.551 7.566-8.181 10.294-13.75 3.168-6.511 5.197-14.091 6.027-22.54.269-2.66-.51-5.261-2.199-7.33-1.69-2.07-4.078-3.36-6.737-3.641-2.798-.279-5.597.63-7.685 2.511-1.85 1.67-3.009 3.939-3.269 6.42v.01c-1.169 10.88-4.318 18.5-9.604 23.28-1.749 1.529-3.368 2.609-4.419 3.029h-150.789v-1.18c0-5.13-.57-9.25-1.769-12.95-.89-2.74-2.249-5.42-3.938-7.75-2.309-3.16-4.787-5.39-7.186-7.55 0 0-5.547-4.94-8.176-7.76-13.942-14.88-23.467-26.44-28.325-34.351-1.909-3.09-3.238-5.8-3.948-8.06-.599-1.97-.73-3.24-.739-4.78-.03-1.09.759-9.01.779-12.39.01-5.53-.929-11.48-2.809-17.68-.309-1-4.577-17.171-4.567-19.141.01-1.38 1.129-4.06 2.588-4.88 3.018-1.6 6.247-2.42 9.615-2.43 7.936.02 15.002 4.43 18.44 11.5l9.345 46.13c.449 2.27 1.689 4.32 3.478 5.78 2.019 1.64 4.647 2.439 7.256 2.189 5.097-.479 8.995-4.71 9.045-9.84l1.699-153.17c-.03-5.96 1.429-11.74 3.808-15.08 1.089-1.55 2.269-2.65 3.728-3.43 1.619-.85 3.438-1.26 5.697-1.27 2.928.01 5.267.45 7.166 1.35 2.419 1.23 3.828 2.83 5.197 5.93 1.429 3.36 2.209 8.3 2.209 13.93 0 0-.75 125.01-.75 125.03.68 4.84 4.727 8.439 9.615 8.58l1.769-.11c4.687-.689 8.256-4.64 8.495-9.38l.41-59.28c.59-3.76 1.819-7.01 3.468-9.149 1.12-1.471 2.309-2.46 3.848-3.221 1.739-.84 3.758-1.25 6.187-1.26 2.169.01 3.947.42 5.597 1.29 2.388 1.271 4.278 3.44 5.767 6.641 1.649 3.529 2.548 8.18 2.538 13.069v56.37c0 2.63 1.07 5.21 2.929 7.07 1.858 1.859 4.437 2.93 7.066 2.93 2.639 0 5.208-1.07 7.067-2.93s2.928-4.44 2.928-7.07v-46.7c.02-5.67 1.579-11.1 4.158-14.529 1.2-1.601 2.539-2.78 4.088-3.601 1.69-.87 3.488-1.28 5.657-1.29 2.249.01 4.068.41 5.727 1.25 2.369 1.24 4.158 3.28 5.617 6.42 1.659 3.601 2.568 8.521 2.558 13.86v49.27c0 2.631 1.07 5.21 2.928 7.07 1.859 1.86 4.438 2.93 7.067 2.93 2.639 0 5.207-1.069 7.067-2.93 1.869-1.86 2.928-4.439 2.928-7.07v-31.756c-.01-5.479 1.629-10.609 4.498-14.069 2.928-3.41 6.097-4.9 10.605-4.971 2.179.01 3.897.38 5.407 1.17 2.138 1.16 3.668 3.04 4.987 6.11 1.47 3.47 2.289 8.33 2.309 13.66l-1.659 27.729c-.33 5.511 4.173 10.26 9.68 10.6 5.267 0 9.949-4.12 10.269-9.4l1.699-28.64c-.04-11.561-2.399-20.7-7.227-27.971-2.778-4.149-6.476-7.529-10.684-9.75-4.297-2.3-9.386-3.51-14.702-3.51h-.32c-6.056 0-11.994 1.65-17.181 4.771-1.328-4.351-3.238-8.29-5.686-11.721-2.939-4.079-6.746-7.399-11.034-9.59-4.378-2.26-9.485-3.45-14.782-3.45h-.14c-5.277 0-10.414 1.23-14.843 3.56-1.509.79-2.978 1.72-4.347 2.76-.79-1.49-1.679-2.93-2.639-4.28-2.928-4.09-6.696-7.43-10.914-9.67-4.437-2.38-9.594-3.63-14.912-3.63h-.109c-4.758 0-9.215.85-13.243 2.53l.17-24.84h157.739c33.066.002 59.968-26.914 59.968-59.998v-100c0-33.084-26.902-60-59.968-60zm-206.169 467.976h144.6v24.024h-144.6zm246.148-307.976c0 22.056-17.935 40-39.979 40h-158.525c-1.071-6.708-3.179-12.252-6.44-17-2.929-4.22-6.886-7.61-11.464-9.79-4.578-2.2-9.885-3.32-15.771-3.32h-.12c-5.417 0-10.614 1.26-15.032 3.63-7.796 4.14-11.994 10.87-14.142 15.79-1.456 3.302-2.498 6.881-3.153 10.69h-77.416c-22.044 0-39.979-17.944-39.979-40v-100c0-22.056 17.934-40 39.979-40h302.064c22.044 0 39.979 17.944 39.979 40v100z" />
        <ellipse cx="377.816" cy="382.76" rx="9.995" ry="10" />
    </svg>

export default IconButton;