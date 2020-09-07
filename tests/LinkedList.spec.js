import LinkedList from '../lib/LinkedList';

function getNodeByValue(linkedList, value) {
    return linkedList.toArray().find(o => o.value === value);
}

describe('LinkedList', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
        jest.clearAllMocks();
    });

    describe('append', () => {
        it('sets tail node', () => {
            // Arrange
            const tailValue = 11;
            const tailNode = { value: tailValue, next: null };

            // Act
            linkedList.append(tailValue);

            // Arrange
            expect(linkedList.getTail()).toEqual(tailNode);
        });

        it('sets head node if head does not exist', () => {
            // Arrange
            const headValue = 11;
            const headNode = { value: headValue, next: null };

            // Act
            linkedList.append(headValue);

            // Arrange
            expect(linkedList.getHead()).toEqual(headNode);
        });

        it('updates previous tail if tail exists', () => {
            // Arrange
            const secondValue = 22;
            const secondNode = {
                value: secondValue,
                next: null,
            };
            const firstValue = 11;
            const firstNode = {
                value: firstValue,
                next: secondNode,
            };

            // Act
            linkedList.append(firstValue);
            linkedList.append(secondValue);

            // Arrange
            expect(getNodeByValue(linkedList, firstValue)).toEqual(firstNode);
        });
    });

    describe('delete', () => {
        it('returns null if no head exists', () => {
            // Assert
            expect(linkedList.delete(0)).toBeNull();
        });

        it('removes all nodes with the given value', () => {
            // Act
            linkedList.append(0);
            linkedList.append(0);
            linkedList.append(0);
            linkedList.delete(0);

            // Arrange
            expect(linkedList.toArray()).toEqual([]);
        });

        it('updates next node to the following node', () => {
            // Arrange
            const thirdValue = 33;
            const thirdNode = {
                value: thirdValue,
                next: null,
            };
            const secondValue = 22;
            const firstValue = 11;

            // Act
            linkedList.append(firstValue);
            linkedList.append(secondValue);
            linkedList.append(thirdValue);
            linkedList.delete(secondValue);

            // Arrange
            expect(getNodeByValue(linkedList, firstValue).next).toEqual(
                thirdNode,
            );
        });
    });

    describe('find', () => {
        it('returns null if no head exists', () => {
            // Assert
            expect(linkedList.find(0)).toBeNull();
        });

        it('returns the first node with the given value', () => {
            // Arrange
            const thirdValue = 33;
            const thirdNode = {
                value: thirdValue,
                next: null,
            };
            const secondValue = 22;
            const firstValue = 11;

            // Act
            linkedList.append(firstValue);
            linkedList.append(secondValue);
            linkedList.append(thirdValue);

            // Assert
            expect(linkedList.find(thirdValue)).toEqual(thirdNode);
        });

        it('returns null if a node with the given value does not exist', () => {
            // Arrange
            const thirdValue = 33;
            const secondValue = 22;
            const firstValue = 11;

            // Act
            linkedList.append(firstValue);
            linkedList.append(secondValue);
            linkedList.append(thirdValue);

            // Assert
            expect(linkedList.find(0)).toBeNull();
        });
    });

    describe('getHead', () => {
        it('is null by default', () => {
            // Act
            const head = linkedList.getHead();

            // Assert
            expect(head).toBeNull();
        });
    });

    describe('getTail', () => {
        it('is null by default', () => {
            // Act
            const tail = linkedList.getTail();

            // Assert
            expect(tail).toBeNull();
        });
    });

    describe('insertAfter', () => {
        it('inserts a new node after the first node with the given value', () => {
            // Arrange
            const secondValue = 22;
            const secondNode = {
                value: secondValue,
                next: null,
            };
            const firstValue = 11;
            const newValue = 'ABC';
            const newNode = {
                value: newValue,
                next: secondNode,
            };

            // Act
            linkedList.append(firstValue);
            linkedList.append(secondValue);
            linkedList.insertAfter('ABC', firstValue);

            // Arrange
            expect(getNodeByValue(linkedList, firstValue).next).toEqual(
                newNode,
            );
        });
    });

    describe('prepend', () => {
        it('sets head node', () => {
            // Arrange
            const firstValue = 11;
            const firstNode = {
                value: firstValue,
                next: null,
            };

            // Act
            linkedList.prepend(firstValue);

            // Assert
            expect(linkedList.getHead()).toEqual(firstNode);
        });

        it('sets tail node if tail node does not exist', () => {
            // Arrange
            const firstValue = 11;
            const firstNode = {
                value: firstValue,
                next: null,
            };

            // Act
            linkedList.prepend(firstValue);

            // Assert
            expect(linkedList.getTail()).toEqual(firstNode);
        });
    });

    describe('toArray', () => {
        it('returns all nodes as an array', () => {
            // Arrange
            const thirdValue = 33;
            const thirdNode = {
                value: thirdValue,
                next: null,
            };
            const secondValue = 22;
            const secondNode = {
                value: secondValue,
                next: thirdNode,
            };
            const firstValue = 11;
            const firstNode = {
                value: firstValue,
                next: secondNode,
            };

            // Act
            linkedList.append(firstValue);
            linkedList.append(secondValue);
            linkedList.append(thirdValue);

            // Arrange
            expect(linkedList.toArray()).toEqual([
                firstNode,
                secondNode,
                thirdNode,
            ]);
        });
    });
});
