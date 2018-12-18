# localisation
A testing node application to check the performance of various i18n libraries.
To run do `npm i` followed by `npm run start`

It should give you the following output:

```
<<<<<BASIC OPERATIONS: 1000 ITERATIONS>>>>>
intlFetchData -> 43.564301 milliseconds
intlCachedFetchData -> 2.021982 milliseconds
linguiFetchData -> 3.810575 milliseconds
intlCustomFetchData -> 0.153965 milliseconds

<<<<<PLURAL OPERATIONS: 1000 ITERATIONS>>>>>
intlFetchData -> 205.934523 milliseconds
intlCachedFetchData -> 5.928062 milliseconds
linguiFetchData -> 92.99088 milliseconds
intlCustomFetchData -> 0.273269 milliseconds
```
