# London Street Orientations

Many have become familiar with [Geoff Boeing's](https://geoffboeing.com/) work on the open-source [OSMnx](https://github.com/gboeing/osmnx) through the popular polar histograms that visualize the street network orientations of [U.S.](https://i1.wp.com/geoffboeing.com/wp-content/uploads/2018/07/city-street-orientations-usa-osmnx.png?ssl=1) and [world](https://i0.wp.com/geoffboeing.com/wp-content/uploads/2019/09/city-street-network-polar-histograms-alpha.jpg?ssl=1) cities. These plots shed light on how a city or region's street network is oriented with respect to the streets' compass bearings. Following Geoff's lead to create such plots on a district level of an individual city, as shown in [this Tweet](https://twitter.com/gboeing/status/1017848936373993473), I set out to visualize the street orientations of London's Boroughs. You can find the code used to generate these plots in [this GitHub repo](https://github.com/jaredbest/osmnx-examples-london-boroughs). In this blog post, I introduce you to OSMnx as well as give you a brief tutorial on how to work with it in a Docker container.

## What is OSMnx?

OSMnx is a [Python](https://www.python.org/) package that allows you to retrieve, model, analyze, and visualize street networks and other spatial data from [OpenStreetMap's](https://www.openstreetmap.org/) API. [1]

With one line of Python code, users can download walkable, drivable, or bikeable urban networks and easily visualize and analyze them. Users can also download amenities/points of interest (POIs), building footprints, elevation data, street bearings/orientations, and network routing with ease. [2]

For more details, refer to the [OSMnx documentation](https://osmnx.readthedocs.io/en/stable/).

## OSMnx in a Docker Container

A great aspect about OSMnx is that you can make use of it for transport modeling and network analysis without even installing Python, the OSMnx package, or its dependencies on your computer since it can be run in a [Docker container](https://www.docker.com/resources/what-container)--a standard unit of software that conveniently packages up code and all its dependencies. [3]

Geoff has created a docker image containing OSMnx, Jupyter, and the rest of the Python geospatial data science stack, which is available [here on Docker Hub](https://hub.docker.com/r/gboeing/osmnx). A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. [4]

If you are starting from scratch, you can get started in four simple steps.

**Step 1:** Download and install [Docker](https://docs.docker.com/get-docker/).

**Step 2:** Open Command Prompt and change directories to a folder containing a Jupyter notebook that you would like to run, such as one of [these OSMnx examples](https://github.com/jaredbest/osmnx-examples-london-boroughs).

**Step 3:** On Windows, run the following command in the Command Prompt:

```
docker run --rm -it --name osmnx -p 8888:8888 -v "%cd%":/home/jovyan/work gboeing/osmnx
```

On Linux, run the following command in the Terminal:

```
docker run --rm -it --name osmnx -p 8888:8888 -v "\$PWD":/home/jovyan/work gboeing/osmnx
```

**Step 4:** Visit <http://localhost:8888> in your browser to launch [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/), which is running inside a container with OSMnx, networkx, igraph, geopandas, pysal, matplotlib, and the rest of the geospatial data science stack. [3]

## References:

1. Boeing, G. (2017). OSMnx: New methods for acquiring, constructing, analyzing, and visualizing complex street networks. Computers, Environment and Urban Systems, 65, 126-139\. <https://doi.org/10.1016/j.compenvurbsys.2017.05.004>.

2. Boeing, G. (2019). Urban spatial order: Street network orientation, configuration, and entropy. Applied Network Science, 4(1), 67\. <https://doi.org/10.1007/s41109-019-0189-1>.

3. Boeing, G. (2019). Street network analysis in a Docker container. <https://geoffboeing.com/2019/02/osmnx-docker-container/>.

4. What is a Container? (n.d.). Retrieved May 24, 2020, from <https://www.docker.com/resources/what-container>.
