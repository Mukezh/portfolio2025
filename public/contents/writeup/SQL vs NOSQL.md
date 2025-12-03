A key part of system design is choosing the database, each type has its own advantages and limitations. The application performance, scalability and operational costs are based on this choice.


### What is a **Transaction** in a Database?

A **transaction** is a _single logical unit of work_ performed on a database.
You can think of it as a **group of operations** (like read, write, update, delete) that must either:

- **All succeed together**, or

- **All fail together** (and leave the database unchanged)

**Lets cover SQL and NoSQL databases.**

**SQL**

SQL aka Relational databases, structure data into tables with rows and columns,
Most common ones are Postgresql, MySQL etc.
The relational model links data across tables using primary and foreign keys.
With a predefined structure where each table's columns and data types are defined already.
this ensures consistency across records,

SQL follow ACID principles to maintain high data accuracy.
A - Atomicity
C - Consistency
I - Isolation
D - Durability

**Atomicity**
	Ensure that each transaction completes fully or not
**Consistency**
	Enforces valid data states throughout transactions
**Isolation**
	Means that each transaction runs independently
**Durability**
	Ensures that once a transaction finishes, its results are permanent, even if the system crashes.


**Scalability in SQL**
	it is usually vertical, can also replicate data across multiple servers to increase read performance.
	Horizontal is harder and requires steps like splitting data and stuff.

**SQL database usecase**
	SQL is well-suited for applications that demand consistent, reliable data management.


**NoSQL databases**
This is more flexible, no structured schema and stuff,
allows multiple data structures,

**types**

**Document store**
	Stores data as documents, json format, allows nested data and varied fields in each document, Eg MongoDB
**Key-value store**
	Data is stored as key-value pairs, which makes retrieval quick and easy, Most common is Redis which is used for caching and quick access to session data
**Wide-Column stores;**
	Uses a column-based layout, where data is organized by columns making reads and writes faster on large datasets. eg is Cassandra
**Graph databases**
	Organizes data as nodes and connections, allowing for fast searches across complex relationships. Eg is Neo4j which is used for connected data like social networks.

Instead of following SQL's strict ACID properties, many NoSQL databases use **BASE principles** (Basically Available, Soft state, Eventually consistent). BASE principles allow data to be handled more flexibly, sacrificing strict consistency for better availability and response time. In distributed NoSQL systems, **eventual consistency** means that data will sync over time across all servers, even if there are temporary differences. This approach works well in applications where availability matters more than real-time data accuracy.

**Scaling in NoSQL DB**
It is built for Horizontal scaling where partitioning and replication are typically built into NoSQL systems. Data is distributed across multiple servers using load balancers.

**Use cases for NoSQL**
NoSQL's flexible data model and high availability make it a strong choice for applications with varied data needs and fast-growing data.

**Security considerations**

Security practices and built-in protections vary between SQL and NoSQL databases, so it's essential to consider the specific security requirements of your application.

- **SQL Security**: SQL databases traditionally support **role-based access control** (RBAC), which lets administrators set permissions based on user roles. SQL databases also commonly use **encryption** for data at rest and in transit. Most enterprise SQL systems support multi-layer security, which can be useful in regulated industries like finance or healthcare.
- **NoSQL Security**: NoSQL databases vary widely in security features, and some lack native access controls or encryption, especially in open-source versions. Many NoSQL systems rely on application-level security measures instead of database-level controls, which can add complexity to development. That said, commercial NoSQL providers like **MongoDB Atlas** offer robust security tools, including encryption, access control, and compliance certifications.

## Clustered vs Nonclustered

Not all indexes are the same. There are different types of index, and so, not only might we need to decide whether or not to create an index, we might also need to decide what _type_ of index to create. For example, the most common types of index in SQL Server are the clustered and the nonclustered index.

- Clustered indexes define how the table is sorted. They sort and store the data based on their key values (i.e. the columns included in the index definition). We can only have one clustered index per table, because the rows can only be stored in one order. Clustered indexes are often applied to the primary key (sometimes automatically by the DBMS), and so the table ends up being sorted by the primary key column/s, but this isn’t a requirement. We could apply a clustered index to another column if need be. Think of clustered indexes like the table of contents at the start of a book. The table of contents show how the book is ordered, which is great when we want to make our way through the book from start to finish. Not so great if we want to find an arbitrary word or term within the book. That’s what the index at the back of the book is for.
- Non-Clustered indexes are like the index at the back of the book. They are a separate structure to the table, and they are ordered by different columns to the clustered index. For example, if the clustered index is on the `movie_id` column, then we might create a nonclustered index on the `title` column in order to make it faster when we run queries that search the `title` column. If we ever need to search the `movie_id` column, the clustered index can take care of that.

In SQL Server, nonclustered indexes are the default. That means when we use `CREATE INDEX` without specifying its type, then it will be a nonclustered index. Oftentimes, this is exactly what we want. By default SQL Server creates a clustered index on the primary key, and so we can’t create any more clustered indexes on the table anyway (a table can only have one clustered index). Therefore, a nonclustered index is usually our preferred option anyway. That is not to say that we can’t swap the primary key’s clustered index for a nonclustered index, and then use a clustered index elsewhere, but that would only be done after careful analysis.

Types of scans in db

Table scan - Usually checks each row for the particular column, the time complexity is O(n)

Index scan - if the column in the where condition is indexed, then index scan happens, where the column itself acts like a b-tree which has root node and nodes on both sides, and binary search happens to retrieve data faster, time complexity would be O(logn)

## Summary Table

| Scan Type                  | Description                            | Common In              |
| -------------------------- | -------------------------------------- | ---------------------- |
| **Table Scan**             | Reads all rows                         | All DBs                |
| **Index Scan**             | Uses index to find rows                | All DBs                |
| **Index-Only Scan**        | Reads only from index                  | PostgreSQL, MySQL      |
| **Bitmap Index/Heap Scan** | Combines multiple index results        | PostgreSQL             |
| **Index Range Scan**       | Reads contiguous index keys            | MySQL, Oracle          |
| **Index Full Scan**        | Reads entire index                     | MySQL, Oracle          |
| **Index Skip Scan**        | Uses index even without leading column | Oracle, MySQL 8+       |
| **Parallel Scan**          | Scans split across CPUs                | PostgreSQL, SQL Server |
| **Clustered Index Scan**   | Reads table via primary key structure  | SQL Server, InnoDB     |
