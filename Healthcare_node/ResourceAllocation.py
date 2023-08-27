import pulp
import pandas as pd
import numpy as np

# Data
location_df = pd.DataFrame({
    'location': ['location1', 'location2', 'location3'],
    'max_resource': [500, 600, 250]
})

work_df = pd.DataFrame({
    'work': ['work1', 'work2'],
    'min_resource': [550, 300]
})

resource_cost = np.array([[150, 200], [220, 310], [210, 440]])

# Create a linear programming problem
problem = pulp.LpProblem("Resource_Allocation", pulp.LpMinimize)

# Decision variables
locations = location_df['location'].tolist()
works = work_df['work'].tolist()

allocation = pulp.LpVariable.dicts("allocation", (locations, works), lowBound=0, cat='Integer')

# Objective function
problem += pulp.lpSum(resource_cost[i][j] * allocation[location][work] for i, location in enumerate(locations) for j, work in enumerate(works))

# Constraints
for i, location in enumerate(locations):
    problem += pulp.lpSum(allocation[location][work] for work in works) <= location_df.loc[i, 'max_resource']

for j, work in enumerate(works):
    problem += pulp.lpSum(allocation[location][work] for location in locations) >= work_df.loc[j, 'min_resource']

# Solve the problem
problem.solve()

# Print the results
print("Status:", pulp.LpStatus[problem.status])

for location in locations:
    for work in works:
        print(f"Allocated resources at {location} for {work}: {allocation[location][work].varValue}")