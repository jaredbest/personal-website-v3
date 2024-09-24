# ML-Agents Setup with Anaconda

The Unity Machine Learning Agents Toolkit (ML-Agents) enables games and simulations to serve as environments for training intelligent agents. [1] It is an open-source project that is managed in [this GitHub repo](https://github.com/Unity-Technologies/ml-agents). This toolkit provides implementations, which are based on PyTorch, of algorithms to train agents using reinforcement learning, imitation learning, neuroevolution, or any other methods. I use Anaconda to manage my numerous Python environments. In this blog post, I explain how to set up an Anaconda environment for ML-Agents on Windows.

## Anaconda Installation

There are several ways to install Python on your machine and manage multiple environments, but [Anaconda](https://www.anaconda.com/) is one of the most straightforward methods. The Individual Edition is free and is available on Windows, MacOS, and Linux.

1. [Click here](https://www.anaconda.com/products/individual) to visit the download page.

2. Choose the Windows installer (or the one that corresponds to your operating system).

3. Run the installer. If you run into problems during the installation process, refer to the [Anaconda Documentation](https://docs.anaconda.com/anaconda/install/).

## Environment Setup

After installing Anaconda, you need to set up a new environment for ML-Agents.

1. From the Start menu, click the Anaconda Navigator desktop app.
2. In Navigator, click the **Environments** tab, then click the **Create** button. The **Create new environment** dialog box appears.
3. In the **Environment** name field, type "ml-agents". You may also name the environment based on the ML-Agents version you plan to use, e.g. "ml-agents-v1.0.7".
4. In the Python version drop-down field, select 3.7.
5. Click **Create**. Navigator creates a Python 3.7 environment named "ml-agents"and activates it.
6. In Navigator, click the **Home** tab, then click **Install** under CMD.exe Prompt. Navigator installs CMD.exe Prompt in the "ml-agents" environment.
7. After installing CMD.exe Prompt, click **Launch**. Navigator runs a cmd.exe terminal with the "ml-agents" environment activated. You can confirm that the environment is active if the environment name appears on the left side of the command prompt in parentheses.
8. Type the following command and hit Enter to install PyTorch.

  ```
  pip3 install torch==1.7.0 -f <https://download.pytorch.org/whl/torch_stable.html>
  ```

9. If you plan to use the latest release of ML-Agents, you can install mlagents Python package from PyPi with the following command.

  ```
  pip3 install mlagents
  ```

10. Confirm that the mlagents Python package installed correctly by entering the following command. You should see a list of available arguments.

  ```
  mlagents-learn --help
  ```

11. Change to the directory of your Unity project by entering "cd" followed by the path and hit Enter; see the following example command.

  ```
  cd C:/Users/USERNAME/Downloads/ml-agents-project
  ```

12. To initiate training, enter the following command. You should see the Unity logo and version information in Command Prompt.

  ```
  mlagents-learn
  ```

You should now be ready to train your agents in Unity.

## Next Steps

In later blog posts, I will cover more details with respect to training, specifically focusing on the commands you should know, tips to speed up training, how to use a trained brain model, and things you should avoid.

## References:

1. Juliani, A., Berges, V., Teng, E., Cohen, A., Harper, J., Elion, C., Goy, C., Gao, Y., Henry, H., Mattar, M., Lange, D. (2020). Unity: A General Platform for Intelligent Agents. arXiv preprint arXiv:1809.02627. <https://github.com/Unity-Technologies/ml-agents>.